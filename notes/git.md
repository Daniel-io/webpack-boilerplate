## (Optional) Re-initialize Git for a new project:
If you're using this as a template, and you want to start fresh with a new Git history:

rm -rf .git
git init
git add .
git commit -m "Initial commit for new project"




✅ Keep the Git history
❌ Have no GitHub or remote connection at all
✅ Use Git locally as a clean, standalone project


1. Clone the repo as usual (or use your existing folder):

git clone https://github.com/someuser/original-repo.git
cd original-repo


2. Remove the remote so it's no longer linked to GitHub:

git remote remove origin


3. Confirm it's clean (no remotes):
git remote -v


Later add new repo: git remote add origin https://github.com/yourusername/new-repo.git






## Clone secondary branch 

git clone -b second-branch-name https://github.com/your-user/your-repo.git



## Name main

git branch -m master main