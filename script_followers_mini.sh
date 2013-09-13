#!/bin/bash

. ./casper_mini.env

phantomjs followers.js|cat >>dataFollowers.txt 


cat dataFollowers.txt
