#!/bin/bash
#'debrucesami'2
#3	     'providenciacol', 
#4	     'fede2001',
#5	     'reygordiflon',
#6	     'thecolombians',
#7	     'elmismosebas',
#8	     'unloquer',
#9	     'estebangiraldo',
#10)	     'tarmacreggae',
#11)	     '_Donkristobal_',
#12)	     'selovendoco',
#13)	     'pulpomancito',
#14)	     'saleconelsol',
#15)	     'aerolineaada', 
#16)	     'promimascota',
#17)	     'lionreggaemusic',
#18)	     'mrbleat',
#19)	     'panorama_laguna',
#20)	     'lscfj'E
#21          'fonseca'
#22          'clopezcorrea'
	     

cp dataFollowers.txt dataUser.txt

awk 'BEGIN {
top=5000;
bottom=1000;
FS=OFS=","
}

{if ($2 > $top) {
print $1,$2
}

}; ' dataUser.txt



   


#cut -d, -f1,2,3 dataUser.txt >> dataTest.txt 





