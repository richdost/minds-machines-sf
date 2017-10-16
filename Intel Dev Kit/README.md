# Minds and Machines Europe Hackathon 2017
# Intel Dev Kit Documentation

## Edge to Cloud in 30 minutes

Wire your board, experience the Edge, send the data to a cloud app that you can leverage for the Hackathon.   The app is based on the Predix Polymer Web App Starter and Reference App.   This makes it easy to connect to cloud services with API SDKs for major services in various languages.  

The solution comes with a Personal Cloud App to get started quickly with a full Front-End and Back-End cloud application, set up of Cloud Services and source code.

## What is Intel NUC?

The Intel® NUC is a powerful 4x4-inch mini PC with entertainment, gaming, and productivity features, including a customizable board that is ready to accept the memory, storage, and operating systems that you want.


## What is the challenge?

Your mission is to address one of the problemas related to Electrification or Advanced Manufacturing challenges. To boost your project prototype you can add connected hardware with Predix Edge to your solution. For instance you can build a heatpump simulator using the Kit to generate real-time temperature data and use it in your Predix cloud space.

## What is your team provided with?

Each team of participant (up to 30 teams) will get:

- 1 NUC board DE3815TYKE
- 1 complete set of the “original” intel gateway sensor kit: https://www.seeedstudio.com/Grove-IoT-Commercial-Gateway-Kit-p-2724.html
  - Sensors:
    - Grove – Button
    - Grove – Sound Sensor v1.2
    - Grove – Touch Sensor
    - Grove – Light Sensor v1.2
    - Grove – Temperature Sensor v1.1
    - Grove – Rotary Angle Sensor(p)
    - Grove – Piezo Vibration Sensor
  - Actuators:
    - Grove – LCD RGB Backlight
    - Grove – Buzzer
    - Grove – Red LED
    - Grove – Green LED
    - Grove – Blue LED
    - Gear Stepper Motor with Driver
  - Others:
    - Grove Base Shield v2
    - (14) 26AWG Grove Cables
    - B to A Type USB Cable – 0.5m


In addition 2 lots of 15 sets of alternate sensors will be available on demand:
1. First type of set is based upon a slightly modified version of https://wiki.openenergymonitor.org/index.php/EmonTx_Arduino_Shield and can monitor AC voltage and current
2. Second type of set is based on the http://www.switchdoc.com/sunairplus-solar-power-controllerdata-collector/   and can be used to monitor 3 set of voltage and current for a small solar panel, a li-po battery and a usb load

## How to access data generated from the Kit?

Here is a description of the dataflow:
1. Data generated from sensors is collected by an instance of Predix Machine deployed on the board. Sensor data is interpreted by the Predix Machine using an adaptor leveraging Intel sensor libraries.
2. The Predix Machine buffers this data locally (store and forward)
3. A predix-machine-template-processor logs the data going by: https://github.com/PredixDev/predix-machine-template-processor
4. The Predix Machine sends the data to a Predix Timeseries instance in your Cloud space

You can find more information about the Predix Machine here:
- https://docs.predix.io/en-US/content/service/edge_software_and_services/machine/predix-machine-overview
- https://www.predix.io/resources/tutorials/journey.html#2054
