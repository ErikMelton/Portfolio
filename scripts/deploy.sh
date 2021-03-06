#!/bin/bash
set -x

gatsby build

# Configure Git to only push the current branch
git config --global push.default simple

# Remove .gitignore and replace with the production version
rm -f .gitignore
cp scripts/prodignore .gitignore
cat .gitignore

# Add prod server as remote
git remote add production ssh://root@51.79.60.183:/root/gatsbybare.git

# Add and commit all static files generated by Gatsby
git add . && git commit -m "Gatsby Build"

# Push all changes to the prod server
git push -f production HEAD:refs/heads/master