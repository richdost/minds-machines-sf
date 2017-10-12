# ims-seed-app
Seed app to show data from Predix Intelligent Mapping service on a map.

This is an example (server side and client side) that can be used to show some geospatial data stored in intelligent-mapping on a map.
If the data presented is very small, then the whole of the collection stored in intelligent-mapping can be loaded in one go.

NOTE: This example should not be used in production. It is a simple demonstration of how to present geospatial data on a map, and
hasn't got implemented any type of authentication/authorisation.

To run this app, you will need to have a valid instance of Predix intelligent-mapping service configured in your org/space.
You will also need the following information:
* intelligent-mapping instance UUID (also known as the Predix-Zone-Id)
* intelligent-mapping SubTenant Id
* intelligent-mapping Client Id
* intelligent-mapping Client Secret
* UAA instance UUID

These can be configured via the following environment variables:
* IMS_PREDIX_ZONE_ID
* IMS_SUBTENANT_ID
* IMS_CLIENT_ID
* IMS_CLIENT_SECRET
* IMS_UAA_INSTANCE_ID

The client needs to be configured too. It has to specify what collections will be visible on the map.
Have a look at public/index.html to configure the styles and the collections to be loaded.

## How to run it locally
1. `npm install`
2. `bower install`
3. Define the environment variables listed above
3. `npm start`

## How to run it on Predix
1. `bower install`
2. Update the `manifest.yml` file and define the environment variables listed above
3. `cf push`
