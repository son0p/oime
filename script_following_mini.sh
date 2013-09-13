#!/bin/bash

. ./casper_mini.env

phantomjs following.js|cat >>dataFollowing.txt 


cat dataFollowing.txt
