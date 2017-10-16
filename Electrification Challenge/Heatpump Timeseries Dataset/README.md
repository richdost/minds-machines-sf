# Minds and Machines Europe Hackathon 2017
# Electrification Challenge - EHPA & Fraunhofer Dataset

## Who are EHPA and Franhofer?

The European Heat Pump Association (EHPA) represents the majority of the European heat pump industry. Its members comprise of heat pump and component manufacturers, research institutes, universities, testing labs and energy agencies. Its key goal is to promote awareness and proper deployment of heat pump technology in the European market for residential, commercial and industrial applications. EHPA aims to provide technical and economic input to European, national and local authorities in legislative, regulatory and energy efficiency matters. All activities are aimed at overcoming market barriers and dissemination of information in order to speed up market development of heat pumps for heating, cooling and hot water production.
http://www.ehpa.org/

Fraunhofer is Europe’s largest application-oriented research organization. Our research efforts are geared entirely to people’s needs: health, security, communication, energy and the environment. As a result, the work undertaken by our researchers and developers has a significant impact on people’s lives. We are creative. We shape technology. We design products. We improve methods and techniques. We open up new vistas. In short, we forge the future.
https://www.fraunhofer.de/


## What is the challenge?

Driving toward a low-carbon future will require the conversion of building heating to electricity, and driving electricity generation to renewables. The insertion of renewable energy in the power distribution system create new challenges such as more load / voltage fluctuation. Industrial players in the energy sector need new tools to study the impact of an increase in heatpump usage in the grid.

Here are few leads to build your tool:
- Create an algorithm that correlates energy consumption and instantaneous power consumed with ambient temperature using the data set provided
- Apply the algorithm to statistical distributions of ambient temperature for areas of interest to estimate the increased energy consumption and peak power consumption for increasing the penetration of heat pumps from the EU average of 10% to penetration levels specified by user input
- Predication tool that integrates weather data, comfort level of the user, and behavior of the heat pump under different climate conditions
- Improve or maximize/minimize consumption or the comfort level of the user
- Detect precursor signals before an incident on the equipment (predictive maintenance) or monitor a potential decrease in the equipment performance.
- Heat pump penetration & impact on load
- Demand response potential (TBD)


## What's in the dataset?

3 years (2011 - 2013) operations data with 1-minute granularity for 3 heatpumps based in Germany: electrical and thermal signals measured on different parts of the system. **A field description file is also provided.**

You can combine this data with any other relevant data accessible on the web. For instance the flowing sources can be useful:
- https://transparency.entsoe.eu/
- https://openweathermap.org/api
- https://www.wunderground.com/weather/api/

## How to access the dataset?

This data is accessible in two formats:
- A Predix Time series instance that you can access read-only using the following references:
  - UAA URL: https://0f074596-79e5-4a1d-8900-707be1c73815.predix-uaa.run.aws-usw02-pr.ice.predix.io
  - ClientID: timeseries_client_readonly
  - Client Secret: secret
  - Timeseries ZoneID: d23057a0-0cd3-4f50-ae72-918883641e98

- The original CSV files on the Hackathon GitHub repo to perform a preliminary exploration. Please note that your prototype should be deployed on Predix and access data from Predix.
