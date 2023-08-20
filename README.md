# Setup Environment for Angular

1. Download and Install Node JS for "NPM"

   https://nodejs.org/en/download/

2. Download and Install Angular CLI, which is an command line tool used to manage your application.

   https://cli.angular.io/

- Open Your command prompt
- Type the following

  C:\> `npm install -g @angular/cli`

- Check the angular version after installing

  C:\> `ng --version`

- Update your CLI if it is using older version:

  C:\> `npm uninstall @angular/cli`

  C:\> `npm install @angular/cli`

  (or)

  C:\> `ng update`

  C:\> `ng update @angular/cli @angular/core --allow-dirty`

# Setup Angular Workspace

- To configure workspace run the following command.

  C:\> `ng new Your-Workspace-Name --create-application=false`

  ![Alt text](workspace.png)
