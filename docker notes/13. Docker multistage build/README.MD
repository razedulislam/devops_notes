Why used multistage ?
Using multistage bulid we can descease image size. 
single stange and multistage image size 
https://prnt.sc/VIVOtU_HNiKZ
https://prnt.sc/GH4hlpSFymZx

steps to check single stage and multistage image size:
1. for single stage
`docker build -t python-app-single-stage .`
`docker images python-app-single-stage`
`docker images`
`docker run -d -p 5000:5000 --name python-app-container python-app-single-stage`
`docker ps`

2. for multistage
`docker build -t python-app-multi-stage .`
`docker images python-app-multi-stage`
`docker images`
`docker run -d -p 5002:5000 --name python-app-container-multi-stage python-app-multi-stage`
`docker ps --size`
