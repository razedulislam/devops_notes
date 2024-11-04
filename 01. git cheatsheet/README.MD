## What is git ?

Git is a tool that helps people keep track of changes to files, especially when working on projects like coding. It allows you to save different versions of your work, so you can go back to earlier versions if needed.

## Think of Git like this:

**Version history:** It keeps a history of all the changes you've made to your project. If you make a mistake, you can go back and fix it by using an earlier version.

**Collaboration:** When multiple people are working on the same project, Git helps them work together without messing up each other's work. Everyone can make their changes, and then combine them when ready.

**Branches:** You can create different "branches" to work on new ideas without affecting the main project. Once the idea is ready, you can merge it back into the main project.

## To set git username and email:
```
git config --global --get user.email
git config --global --get user.name
```
## To generate an SSH key locally for Git

### step 1 : Open your terminal

### step 2 : Generate ssh key using below command
```
ssh-keygen -t ed25519 -C "your_email@example.com"
```
### step 3 : Save the Key:

When prompted to "Enter a file in which to save the key," press Enter to save it in the default location (~/.ssh/id_ed25519 for ed25519 keys or ~/.ssh/id_rsa for RSA keys). If you want a different name or location, you can specify it.

### step 4: Set a Passphrase
```
Skip it
```
### step 5 : Check public and private key
```
cat ~/.ssh/id_rsa.pub
cat ~/.ssh/id_rsa
ssh -T git@github.com
https://prnt.sc/umLUwIE0_89F
```
For windows

```
cat C:\Users\Reve\y.pub
https://prnt.sc/umLUwIE0_89F
```
### step 6: Add the Key to Your Git Account:
```
Find the SSH Keys section in the settings, and paste your key there.
```
### step 7: verify that it works by running
```
ssh -T git@github.com
```

## Git commands
### Command line to create a repository use below 6 commands
```
git init
Git add .
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:<github_username>/l<repo_name>.git
git push -u origin main
```
### after adding some file or modifying file use below three command
```
Git add .
git commit -m "changed commit1"
git push
```

### check git log/git history
```
git log
```
### check git status
```
git status
```

### check git branch
```
git branch
```
### create git branch
```
git checkout -b <branch_name>
example:
git checkout -b dev
```

### switch any git branch
```
git checkout <branch_name>
example:
git checkout dev
```

### Fetch latest code in local machine
```
git pull
```

### Undo the last commit but keep the changes
```
git reset --soft HEAD~1
```

### Undo the last commit and discard changes (hard reset)
```
git reset --hard HEAD~1
```

### Undo the any commit but keep the changes
```
git reset <hash_id>
```

### Undo the last commit and discard changes (hard reset)
```
git reset --hard <hash_id>
```
### git quick overview of recent changes
```
git log –oneline
```

### suppose you have  already pushed in git what have to do

```
git log
git reset --hard <hash_id>
git push -f
```
### Git merge
Imagine you are working on a project with a repository that has a main branch. You create a new feature branch called feature-branch to add new functionality to the project. Once you've made changes and committed them to feature-branch, you want to merge these changes into main.

#### Step-by-Step Guide:
##### Create a New Branch and Switch to It:
```
git checkout -b feature-branch
```
##### Make Changes and Commit Them: 
```
git add .
git commit -m "Add new feature implementation"
```
##### Switch Back to main Branch:
```
git checkout main
```

##### Ensure main is Up to Date: 
```
git pull origin main
```
##### Merge feature-branch into main:
```
git merge feature-branch
```
##### Resolve Any Merge Conflicts (If Necessary): 
```
git add <resolved-file>
```
Once all conflicts are resolved, complete the merge:
```
git commit
git push origin main
```

### Git rebash
Assume you have a feature-branch that is behind main. You want to rebase feature-branch onto main to update it.

#### Step-by-Step Guide:
##### Checkout the Branch You Want to Rebase:
```
git checkout feature-branch
```
##### Rebase Onto main:
```
git rebase main
```

##### Resolve Any Rebase Conflicts: 
```
git add <resolved-file>
```

##### continue rebase 
```
git rebase --continue
```

###### If you want to stop the rebase and go back to how things were before the rebase started:
```
git rebase --abort
```
##### Finish and Update the Remote Branch:
```
git push origin feature-branch --force
```
![alt text](image.png)