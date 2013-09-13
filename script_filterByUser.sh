#!/bin/bash

cp dataFollowers.txt dataUser.txt
rm dataTest.txt
cut -d, -f1,2 dataUser.txt >> dataTest.txt 





