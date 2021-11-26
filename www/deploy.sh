#! /bin/bash

# clean directory
FILES=$(cd .. && ls -I "www") # list all files/directories except "www" dir
for FILE in $FILES
  do 
    rm -r ../$FILE
done

# copy files
if [ -d build ] 
  then
    cp -r ./build/* ..
fi

if [ -d fixed ] 
  then
    cp -r ./fixed/* ..
fi