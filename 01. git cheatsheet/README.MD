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