

### Description 
This site shows the courses for a UQ program list, the deployed site can be found at uqcourses.tk

### To test on local server 
```$xslt
npm start 
```

### To build 
```
npm build 
or
yarn && yarn build 
``` 


### To serve 
```$xslt
serve -s build 
```


### If using Apache 

```bash 
sudo cp -R ~/frontend/build/* /var/www/html
service httpd restart
```



