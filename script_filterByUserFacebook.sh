#!/bin/bash
# 2 dbam, 3 estebangira, 4 saleconelsol, 5 lionreggae, 6 providencia, 7 likesomecats, 8 mrbleat
cp dataLikesFacebook.txt dataUserFacebook.txt
rm dataTestFacebook.txt
cut -d, -f1,3,7,8 dataUserFacebook.txt >> dataTestFacebook.txt 





