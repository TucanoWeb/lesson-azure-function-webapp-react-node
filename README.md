[![Linkedin](https://img.shields.io/static/v1.svg?logo=linkedin&color=f78A38&labelColor=083468&logoColor=ffffff&style=for-the-badge&label=Linkedin&message=Public)](https://www.linkedin.com/in/eric-ricielle-2aa1ba237/) [![Elestio examples](https://img.shields.io/static/v1.svg?logo=github&color=f78A38&labelColor=083468&logoColor=ffffff&style=for-the-badge&label=github&message=open%20source)](https://github.com/TucanoWeb) [![Whatsapp](https://img.shields.io/static/v1.svg?logo=whatsapp&color=f78A38&labelColor=083468&logoColor=ffffff&style=for-the-badge&label=Whatsapp&message=Tirar%20Dúvidas)](https://api.whatsapp.com/send?phone=5531992936042)

# Demonstration of Azure functions and Web App by TucanoWeb with ReactJS, CosmosDB and NodeJS

Project made for one of my students on Azure Platform.



# Get Starter



## Install Dependencies 

In the root of the each project, run the command:

```bash
npm install
```

## Create cosmosDB

ON AZURE PLATFORM:

- Create the Resource Group;
- Create Storage Account;
- Create a CosmosDB NoSQL with manual throughtput (low price)

Copy endpoint end cosmos_key.
Copy the connection string of the Storage Account.


## Run Project - api_function


On Azure Platform, create a cosmosDB
- Create the Azure Function Resource in same Resource Group, using the Storage Account created.

In the root of the project:

- Paste cosmos endpoint and key into of .env_example and rename the file to .env
- Paste connection string into the file local.settings.json_example and rename the file to local.setting.json

Run the command:

```bash
az login
func azure <name_app> publish <name_function_resource_created>
```

Copy the default domain (resource Function App Overview)


## Run Project - my-app

ON AZURE PLATFORM:

- Create another Resource Group;
- Create the Web App (container - windows) Resource in same Resource Group, using the Storage Account created.


In the root of the project: 

- Paste default domain of the Function App into the my-app > .env_example and rename the file to .env



Run the command:

```bash
npm run build
cd dist
az login
az webapp up -n <name_app> -g <resource_name> --html
