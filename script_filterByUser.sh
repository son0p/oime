#!/bin/bash

cp dataFollowers.txt dataUser.txt
rm dataTest.txt
cut -d, -f1,9,18,19,20 dataUser.txt >> dataTest.txt 





