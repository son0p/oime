#!/bin/bash

. ./casper_mini.env

phantomjs likesFacebook.js|cat >> dataLikesFacebook.txt 


cat dataLikesFacebook.txt
