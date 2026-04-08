# ABOUT GIT

## Installing Git and clone the modpack:

In order to set up your test modpack and have it update automatically with github, you're going to need a few things.

 1. You'll need to install Git. This staging tool allows you to **push** and **push** directly from and to the server using **commits**.

    You can get git at https://git-scm.com/.

    You can pretty much use the default settings for everything.


 2. You need to make a folder in your instances folder and name it `Fishbowl 5 Fish 5 Furious TEST-ENV`

    By default, this is `Users/[user]/curseforge/minecraft/Instances`

    Although if it isn't, you can find it by opening the folder of one of your other Curseforge instances.

 3. In **Git Bash**, a new application installed through git-scm, you need to use the following command:
    ```bash
    git clone https://github.com/yannick1124/Fishbowl-5-Fish-5-Furious-TEST-ENV.git "/c/Users/[user]/curseforge/minecraft/Instances/Fishbowl 5 Fish 5 Furious TEST-ENV"
    ```
    Make sure to replace `[user]` with the right folder name, or if your instances are somewhere else entirely as outlined in step 2, use that instead.


 4. Just open up Curseforge again!

## Using Git Gui to push your changes:

Open **Git Gui**, another git-scm application.

Click __Open Existing Repository__ and navigate to the TEST ENV folder created in step 2 and filled in step 3.

From here you'll be able to fetch, stage, commit and push changes.

### Before you start working on the project, it's important that you always fetch from remote `main`.

This updates your profile with any changes you've made to the project.

In the action bar at the top of the application, use [ Remote ] \\-> [ Fetch from ] > [ main ]

### To stage, commit and push your changes

 1. To do so, always press [ Rescan ] first. 

 2. Then, you can [ Stage Changed ]

 3. Write a commit message explaining the changes you've made. *(Please do this, I really don't want to sift through material to see what's added)*

 4. [ Commit ] your changes.
 
 5. Finally [ Push ] your commit to `main`. I have made a branch for myself, but I don't.

BEFORE PUSHING ANY CHANGES, ALWAYS MAKE SURE IT WORKS BOTH IN YOUR OWN VERSION AND THE TEST VERSION OF THE PACK

---

There are other ways to do it that look a bit better, but those are either just as easy or harder to use, and require a little extra setup.

If you have any questions, about that or other things, you know where to contact me!
