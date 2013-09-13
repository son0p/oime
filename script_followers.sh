#!/bin/bash

. ./casper.env

phantomjs followers.js|cat >>dataFollowers.txt 


cat dataFollowers.txt
