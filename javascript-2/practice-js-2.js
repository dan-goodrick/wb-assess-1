/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

const gitDefinition =
  "A code repository that provides the ability to navigate between versions of code";
//////////////////PROBLEM 2////////////////////
/*
Create a variable called 'gitHubDefinition'.  
It should be a string containing your best definition of what GitHub is.
*/

const gitHubDefinition = "A website that provides GUI access to git tools";

//////////////////PROBLEMS 3 - 9////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

const init = {
  description: "initializes a git repo",
  code: "git init",
};
//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

const clone = {
    description: "copies a remote repo onto your computer and initializes the repo",
    code: "git clone https://github.com/dan-goodrick/challenge-max-of-two.git",
};//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

const status = {
    description: "lists the status of the local repo - files modified, created, deleted, added, committed, etc",
    code: "git status",
  };
//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

const add = {
    description: "adds files to a commit.  '.' adds all files in the current directory",
    code: "git add .",
  };
//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

const commit = {
    description: "commits changes in files in staging to the local repository",
    code: "git commit -m 'Initial commit'",
  };
//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'addRemote' with 'description' and 'code' properties
    following the guidelines above to describe the command to add a remote location to your git repository.
*/

const addRemote = {
    description: "Links a local (origin) repo to a remote repo (github)",
    code: "git remote add origin https://github.com/dan-goodrick/wb-js-basics-x.git",
  };
//////////////////PROBLEM 9////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

const push = {
    description: "pushes a commit out to the remote",
    code: "git push",
  };