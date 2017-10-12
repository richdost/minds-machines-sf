# Minds and Machines Europe Hackathon 2017
# Advanced Manufacturing Challenge - Stelia Aerospace Dataset

## Who is Stelia?
STELIA Aerospace offers global solutions for aeronautical manufacturers and airlines. STELIA Aerospace designs and produces aerostructures, pilot seats and business and first class passenger seats.
More info: http://www.stelia-aerospace.com/en/stelia-aerospace/p10-group/

## What is the challenge?
Stelia main activity is to produce Elementary Parts (EP) to be assembled in workpackages of aircraft production programs. One workpackage can involve more than 6000 different EP references. A sequence of 5 activities (steps) are involved in EP preparation cycles, each with a specific delivery milestone date:

1.	**Design** Designing the definition of the reference (performed by Stelia) - “date_reception_OMP""
2.	**Manufacturing / Engineering** Preparation of the industrialization file for the reference (performed by Stelia) - “date_transmission_proc”
3.	**Procurement** Purchasing the reference from the supplier (performed by Stelia) - “date_affectation”
4.	**Industrialization** Industrialization by the supplier (performed by Stelia's suppliers) – “date_reelle_livraison_indus”
5.	**Production** Production of the reference by the supplier (performed by Stelia's suppliers) - "date_liberation"

This challenge is about on time delivery (OTD) management. A variety of unforeseen situations can alter the scheduled operations plan (errors or delays). Also sometimes the priorization strategy for an activity can be in contradiction with the strategy for next activity.

Stelia would strongly benefit from new tools and services to improve the accuracy of its operations schedules and raise alerts when the the schedule needs to be revised.

You can choose between two problematics:
1. **Basic** Build a model to estimate the EP references total cycle duration forecast.
2. **Advanced** Build a tool to compute the optimal EP preparation schedule. This is a queue management optimization problem.

## Basic - EP total cycle duration forecast

**Problem description**

Your mission is to build a regression model that can predict the overall time required to prepare each EP reference called the reference "total cycle duration". This duration is defined as the time elapsed between the end of design step ('date_reception_OMP') and the client delivery date ('date_liberation').

```
total_cycle_duration = date_liberation - date_reception_OMP
```

Building a model that takes **EP characteristics** and **full historical cycle duration** data as an input could be a first advance for better On Time Delivery:
- **EP characteristics** each EP requires a different processing time depending on its geometrical complexity. One measure of EP geometrical complexity is the technocode (code_filiere).
- **full historical cycle duration** currently Stelia is using the last realized total cycle duration for each EP to estimate future duration and shape the operations schedule

**Dataset**

The dataset is made of 2 CSV files covering EP characteristics and realized dates:
- **train.csv** that you can use to train your model
- **test.csv** that you can use to test your model. The output variable (date_liberation) has been removed from the test set.

In this GitHub repo you can also find a data dictionary (fields_description.xlsx).

**Submission evaluation**

Your submission must include:
1. Your **prototype app** deployed on Predix. Your app can access the data files we loaded on a shared blobstore in Predix (refer to the "how to access the dataset?" section)
2. A **CSV file** with your estimate of total_cycle_duration for each reference in the testset

Your submitted CSV file should be formatted like this (comma separated):

```
ID,estimate
1,3.4
2,9.3
3,5.0
4,1.7
...
```

The error function to be considered for regression model is the standard **mean squared error** (MSE) on 'total_cycle_duration'.

*Bonus point:*
Use the non-symetric function defined below for regression error. Its purpose is to penalize differently late estimations from early estimations (early is worst).
```
error = sum[[(Yrealized - Yestimate) / Yestimate]^2 * alpha]

With:
- alpha = 100 if (Yrealized - Yestimate) > 0
- alpha = 1 if (Yrealized - Yestimate) < 0
```

Hint: you could implement a gradient descent model search with this error function using Pytorch or Tensorflow.


### How to access the dataset?
- The dataset is made of 2 CSV files (train set / test set) that you can download from the Hackathon GitHub repo.
- These files have been loaded in a blobstore instance that you can access from your app using the following information:
  - For more information about interacting with Blobstore : [tutorial](https://www.predix.io/resources/tutorials/tutorial-details.html?tutorial_id=1931&tag=1922&journey=Exploring%20Blobstore) & [documentation](https://docs.predix.io/en-US/content/service/data_management/blobstore/)
  - Blobstore URL : https://mmeurope-blob.run.aws-usw02-pr.ice.predix.io
  - You can perform the following queries on this URL :
    - **List files** Returns list of files in blobstore.
      - **URL** /v1/list
      - **Method:** 'GET'

    - **Get file** Returns file.
      - **URL** /v1/blob/:filename
      - **Method:** 'GET'
      - **URL Params (Required)** `filename=[string]`


## Advanced - EP preparation schedule optimization

**Problem description**

Stelia current challenge is a queue management optimization problem. Your mission is to implement a tool that can simulate different scenarios to find the best plan.

Stelia has 4 levers to optimize its operations, with increasing activation cost:
1. **Priorization** between references for each preparation step (design / manufacturing / Procurement / Industrialization / Production) i.e. which reference in the queue should be processed first.
2. **Modification of planned capacity** for each preparation step
3. Use an **emergency fast-lane**, also called red-wire (fil rouge). This fast-lane has very limited capacity.
4. Inform the client of a **delivery date revision** with penalties

**Dataset**

For this challenge you can use the dataset presented in the Basic problematic as an illustration but your mission is essentially to build the optimization model.

**Optimization model**

The optimization problem can be stated as follows:

*Assumptions*

- the objective function unit of measure is time (delays)
- each EP preparation step can be modeled with a queue
- the timestep granularity is 1 day
- Initial state: you can define any initial
  - set of references to be produced
  - nominal capacity for each preparation step

*Constraints*

- each queue has a given processing capacity expressed in number of workers. Each worker can process 35 number of references per week. The notice period to change the number of workers for one step is 8 weeks. Max total capacity increase is 20% of nominal capacity.
- fast-lane capacity is fixed equal to 10% of planned capacity
- cost to be added in objective function for revising one date is equal to 1000 * number of overdue days

*Variable*

For each each preparation step queue and each timestep:
- list of references in the queue with their priority order
- the processing capacity

**Submission evaluation**

Your project will be evaluated on the level of complexity (number of constraints / variables) that your model can handle.
