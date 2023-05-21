// Token generted - Pwd - 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

dotnet --info
dotnet -h/--help
dotnet sln -help
dotnet sln add --help/-h
dotnet new webapi -n API // Adding a new webapp APIs
dotnet sln add package Microsoft
dotnet sln add package Microsoft.EntityFrameworkCore
dotnet sln add package Microsoft.EntityFrameworkCore.Sqlite
dotnet tool install --global dotnet-ef --version 7.0.5  // for Entity framwork tool
dotnet ef migrations add InitialCreate -o API/Data/Migrations  // Do first Migration using Models
dotnet ef // will provide the options of ef
dotnet ef database update // or drop //