# Minds and Machines Europe Hackathon 2017
# What's in your Predix space?

With your Predix account, you have access to your team space in one of these orgs:
- predixbuilders2
- predixbuilder3
- predixbuilder4  

Your team space name is: team# (# is your team number).

In order to help you to quickly start the challenge, we already deployed services and apps in your space.

## APP

### MMEurope-ui

We deployed a 'MMEurope-ui' app to show you how to request and plot time series data from the heatpump timeseries instance. Please note that another timeseries instance is available with ESB load & weather data. You just need to bind your app with another timeseries instance to start working with it.

You can give it a try (replace # with your team number):
- App URL:
https://mmeurope-ui-team#.run.aws-usw02-pr.ice.predix.io
- UserID: TEAM_#
- User Secret: TEAM_#

**The source code of this app can be found in the "Seed app" folder in this GitHub repo.**

### MMEurope-ui-intelligent-mapping

We deployed a 'MMEurope-ui-intelligent-mapping' app to show you how to request and plot GIS data stored in the Intelligent Mapping service instance deployed in your team space.

You can give it a try (replace # with your team number):
- App URL:
https://mmeurope-ui-intelligent-mapping-team#.run.aws-usw02-pr.ice.predix.io
- UserID: TEAM_#
- User Secret: TEAM_#

**The source code of this app can be found in the "Seed app" folder in this GitHub repo.**

## SERVICES

In your space you are going to see multiple services:
* **MMEurope-uaa**
* **MMEurope-analyticsFramework**
* **MMEurope-intelligentMapping**
* **MMEurope_timeseries_heatPump** [(CUPS)](https://docs.cloudfoundry.org/devguide/services/user-provided.html)
* **MMEurope_timeseries_loadData** [(CUPS)](https://docs.cloudfoundry.org/devguide/services/user-provided.html)
* **MMEurope_uaa_admin** [(CUPS)](https://docs.cloudfoundry.org/devguide/services/user-provided.html)

### MMEurope-uaa

The User Account and Authentication Service (UAA) is a OAuth2 server that can be used for centralized identity management. You can have a look at UAA [here](https://docs.predix.io/en-US/content/service/security/user_account_and_authentication/).

The **admin secret** is : MMEurope

We already created 1 UAA client and 1 user:
* **Client ID** : client
* **Client Secret** : secret
* **User ID**:  TEAM_#
* **User Secret** : TEAM_#

### MMEurope-analyticsFramework

We provisionned a Predix Analytics framework service instance in your team space. It is already configured with the client created in your 'MMEurope-uaa' UAA instance.
If you want to use analytics from Predix Catalog, you can see the [documentation here](https://docs.predix.io/en-US/content/service/analytics_services/analytics_framework/get-started).

### MMEurope-intelligentMapping

GE Energy Connections provides a mapping service on Predix: Intelligent Mapping that stores the location and properties of static assets.

We created an Intelligent Mapping service instance in your team space and ingested GIS GeoJSON data from ESB into this instance. You can find the original [ESB data here](https://github.com/PredixDev/minds-machines-europe/tree/GIS_geojson_data/Electrification%20Challenge/Grid%20GIS%20Dataset).

You can find the Intelligent Mapping service API [documentation here](https://sw-intelligent-mapping.github.io/smallworld-mapping-services/#MappingServices/IMSapis.htm%3FTocPath%3DGetting%2520started%2520with%2520Intelligent%2520Mapping%2520and%2520Dynamic%2520Mapping%2520services%7C_____8).

**NB:** 'x-subtenant-id' or 'subtenantId' is the same id that your intelligent Mapping service ZoneId.

### MMEurope_timeseries_heatPump

We have ingested all the EHPA/Fraunhofer heat pump data into a Time Series instance located in our admin space. ([documentation](https://docs.predix.io/en-US/content/service/data_management/time_series/) about Time Series)

You have access to this Time Series instance in read-only mode.You’ll find how to access this data and an example [here](https://github.com/PredixDev/minds-machines-europe/tree/master/Electrification%20Challenge/Heatpump%20Timeseries%20Dataset).

**NB:**
- The time series instance is **not in your space** but in an admin space. The service you can see in your space is a [**cups**](https://docs.cloudfoundry.org/devguide/services/user-provided.html).
- MMEurope_timeseries_heatPump & MMEurope_timeseries_loadData are not the same TimeSeries instance.

### MMEurope_timeseries_loadData

We store all data from load data and weather data into a Time Series instance ([documentation](https://docs.predix.io/en-US/content/service/data_management/time_series/) about Time Series)

You have access our Time Series instance only in read only.You’ll find how to access to this data and an example [here](https://github.com/PredixDev/minds-machines-europe/tree/master/Electrification%20Challenge/Grid%20Timeseries%20Dataset)

**NB:**
- The time series instance is **not in your space** but in an admin space. The service you can see in your space is a [**cups**](https://docs.cloudfoundry.org/devguide/services/user-provided.html)  
- MMEurope_timeseries_heatPump & MMEurope_timeseries_loadData are not the same TimeSeries instance.

#### MMEurope_uaa_admin
To access our two Admin TimeSeries instances, you need credentials and token. So, we have created a [**cups**](https://docs.cloudfoundry.org/devguide/services/user-provided.html) in order to easily bind this UAA for TimeSeries with your app.

**NB:** With this cups you can only get informations to request data on our two TimeSeries instances. For app authentication, analytics framework, intelligent-mapping,..., you have to use your own UAA instance called **MMEurope-uaa**.
