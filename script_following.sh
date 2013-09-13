#!/bin/bash

. ./casper.env

phantomjs following.js|cat >>dataFollowing.txt 


cat dataFollowing.txt
