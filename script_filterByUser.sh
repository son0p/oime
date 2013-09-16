#!/bin/bash

cp dataFollowers.txt dataUser.txt
rm dataTest.txt
cut -d, -f1,4 dataUser.txt >> dataTest.txt 





