# ABOUT GIT

## Installing Git and clone the modpack:

In order to set up your test modpack and have it update automatically with github, you're going to need a few things.

 1. You'll need to install Git. This staging tool allows you to **push** and **push** directly from and to the server using **commits**.

    You can get git at https://git-scm.com/.

    You can pretty much use the default settings for everything.

 2. You'll have to open Curseforge and create a new profile with the following settings:
     1. Name: `Fishbowl 5 Fish 5 Furious TEST-ENV`
     2. Minecraft Version: `1.21.1`
     3. Modloader: `NeoForge`
     4. Modloader Version: `neoforge-21.1.222`

 3. You'll need to [ open folder ] in your newly created profile, copy over `.curseclient` and `minecraftinstance.json` to another location.

    if you don't see `.curseclient`, enable [ view ] \\-> [ view hidden files ]

 3. In **Git Bash**, a new application installed through git-scm, you need to use the following command:
    ```bash
    git clone https://github.com/yannick1124/Fishbowl-5-Fish-5-Furious-TEST-ENV.git "/c/Users/[user]/curseforge/minecraft/Instances/Fishbowl 5 Fish 5 Furious TEST-ENV"
    ```
    Make sure to replace `[user]` with the right folder name, or if your instances are somewhere else entirely as outlined in step 2, use that instead.

 4. Just open up Curseforge again!

## Before you start working on the project each time, it's important to always pull from the remote origin main.

In Git Bash, navigate to your git folder using `cd "/c/Users/[user]/curseforge/minecraft/Instances/Fishbowl 5 Fish 5 Furious TEST-ENV"`, then run `git show HEAD`

## Using Git Gui to push your changes:

Open **Git Gui**, another git-scm application.

Click __Open Existing Repository__ and navigate to the TEST ENV folder emptied in step 4 and filled again in step 5 and 6.

From here you'll be able to fetch, stage, commit and push changes.

### Before you start working on the project, it's important that you always fetch from remote `main` (or `origin` if you don't see `main`).

This updates your profile with any changes you've made to the project.

In the action bar at the top of the application, use [ Remote ] \\-> [ Fetch from ] > [ main ]

### To stage, commit and push your changes

 1. To do so, always press [ Rescan ] first. 

 2. Then, you can select the files in Unstaged Changes you'd like to push and go to the action bar, [ Commit ] \-> [ Stage To Commit]

 3. Write a commit message explaining the changes you've made. *(Please do this, I really don't want to sift through material to see what's added)*

 4. [ Commit ] your changes.
 
 5. Finally [ Push ] your commit to `main`. I have made a branch for myself, but I don't.

BEFORE PUSHING ANY CHANGES, ALWAYS MAKE SURE IT WORKS BOTH IN YOUR OWN VERSION AND THE TEST VERSION OF THE PACK

---

There are other ways to do it that look a bit better, but those are either just as easy or harder to use, and require a little extra setup.

If you have any questions, about that or other things, you know where to contact me!
