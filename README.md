
한국어 | [English](README_en.md)

<br>

# **🍄 DeepMush**


- 버섯 AI 분석 및 버섯채집위치 저장 플랫폼

화면 흐름 모델


<p>
 <img width="700" alt="quizmaker_imageupload" src="https://user-images.githubusercontent.com/52617204/151109579-f6ca7c75-5087-4a31-a5eb-54c0ae9a41dd.png">
 </p>
<br>

# Core Screen
<br>
1.소셜로그인
<br>
2.유저정보
<br>
3.버섯리스트
<br>
4.카메라화면/AI분석
<br>
5.버섯위치정보
<br>
<br>


소셜로그인,유저정보
<br>


<p>
 <img width="250" height="545" alt="quizmaker_imageupload" src="https://user-images.githubusercontent.com/52617204/151115193-8e563f83-16b2-43c1-935a-64ec89686472.gif">
 &nbsp;&nbsp;&nbsp;&nbsp;
 <img width="250" height="545" alt="quizmaker_imageupload" src="https://user-images.githubusercontent.com/52617204/151109628-e3a1cfd3-f1ff-4d72-befc-e3c288eb43c7.gif">
  &nbsp;&nbsp;&nbsp;&nbsp;
  <img width="250" height="545" alt="quizmaker_imageupload" src="https://user-images.githubusercontent.com/52617204/151110509-2e1281f3-a90f-415f-8fc2-f677c9f2ae03.png">
</p>
<br>

버섯리스트(검색/삭제/상세)
<p>
 <img width="250" height="545" alt="quizmaker_imageupload" src="https://user-images.githubusercontent.com/52617204/151110573-e3f309ff-6063-42d1-bee7-64d1f512db69.gif">
  &nbsp;&nbsp;&nbsp;&nbsp;
 <img width="250" height="545" alt="quizmaker_imageupload" src="https://user-images.githubusercontent.com/52617204/151110584-db5a721b-f70b-4326-a95e-c45804ab4b24.gif">
  &nbsp;&nbsp;&nbsp;&nbsp;
 <img width="250" height="545" alt="quizmaker_imageupload" src="https://user-images.githubusercontent.com/52617204/151110593-fb0a4212-e337-4c9e-a703-675754215176.gif">
</p>
<br>

카메라화면/AI분석(앨범업로드,촬영업로드,empty)


<p>
 <img width="250" height="545" alt="quizmaker_imageupload" src="https://user-images.githubusercontent.com/52617204/151110697-d593fede-1580-478a-8827-fa97f24775b8.gif">
  &nbsp;&nbsp;&nbsp;&nbsp;
 <img width="250" height="545" alt="quizmaker_imageupload" src="https://user-images.githubusercontent.com/52617204/151110761-78cc3c25-96be-4e67-8c80-2f03374045ab.gif">
  &nbsp;&nbsp;&nbsp;&nbsp;
 <img width="250" height="545" alt="quizmaker_imageupload" src="https://user-images.githubusercontent.com/52617204/151110769-f315050e-10d4-4e12-83c0-c3efb749a19b.gif">
</p>
<br>


버섯위치정보

<p>
 <img width="250" height="545" alt="quizmaker_imageupload" src="https://user-images.githubusercontent.com/52617204/151110793-70e0f4fe-05bd-4232-b1b6-16ccad3acad3.gif">
</p>
<br>


## **🏢 System Architecture**


<p align="center">  
  <img src="https://user-images.githubusercontent.com/52617204/151111902-89b73655-e0ad-4c04-a604-5900086daf35.png">
</p>

<br>


## **📑 Swagger**

<p align="center">
<img alt="swagger" src="https://user-images.githubusercontent.com/52617204/151116968-91daa564-0b19-4fd6-894e-939737c26150.png">
</p>

<br>

## **🤖 AI**
 
<img alt="swagger" src="https://user-images.githubusercontent.com/52617204/151129010-5bb17820-b6f5-4b5c-8ab3-2073dcdb0642.png">
<img alt="swagger" src="https://user-images.githubusercontent.com/52617204/151129058-aaf95002-6958-48dc-829c-95ac43d61dad.png">
<img alt="swagger" src="https://user-images.githubusercontent.com/52617204/151129108-81efb7aa-c483-48aa-a508-50874d589528.png">
<br>

<br>

# **🏃‍♂️ How to Start**

<br>
# cd frontend
<br>
# npm install
<br>
# expo start
<br>
<br>
<br>
<br>
<br>

```
.
├── LICENSE
├── README.md
├── backend
│   ├── Dockerfile
│   ├── README.md
│   ├── accounts
│   ├── config
│   ├── db
│   ├── images
│   ├── inference
│   ├── latlngs
│   ├── logs
│   ├── manage.py
│   ├── registry.py
│   ├── requirements.txt
│   ├── run-celery.sh
│   ├── run.sh
│   ├── scripts
│   ├── secrets.json
│   ├── secrets.template.json
│   ├── static-files
│   └── users
├── build-images.sh
├── data
│   ├── elk-data
│   ├── grafana
│   └── prometheus
├── db
│   ├── PG_VERSION
│   ├── base
│   ├── global
│   ├── pg_commit_ts
│   ├── pg_dynshmem
│   ├── pg_hba.conf
│   ├── pg_ident.conf
│   ├── pg_logical
│   ├── pg_multixact
│   ├── pg_notify
│   ├── pg_replslot
│   ├── pg_serial
│   ├── pg_snapshots
│   ├── pg_stat
│   ├── pg_stat_tmp
│   ├── pg_subtrans
│   ├── pg_tblspc
│   ├── pg_twophase
│   ├── pg_wal
│   ├── pg_xact
│   ├── postgresql.auto.conf
│   ├── postgresql.conf
│   ├── postmaster.opts
│   └── postmaster.pid
├── deploy
│   ├── 502saver.service
│   ├── 502saver.sh
│   ├── setup.tf
│   ├── setup.yaml
│   └── variables.tf
├── docker-compose.yml
├── elastic
│   ├── elasticsearch.prod.yml
│   └── elasticsearch.yml
├── filebeat
│   ├── filebeat.prod.yml
│   └── filebeat.yml
├── frontend
│   ├── App.tsx
│   ├── app.json
│   ├── assets
│   ├── babel.config.js
│   ├── node_modules
│   ├── package-lock.json
│   ├── package.json
│   ├── shim.js
│   ├── src
│   ├── tsconfig.json
│   ├── yarn-error.log
│   └── yarn.lock
├── grafana
│   ├── grafana.ini
│   └── grafana.prod.ini
├── init-k3s-cluster.sh
├── install-cert-manager.sh
├── k8s
│   ├── auth
│   ├── backend.yaml
│   ├── database.yaml
│   ├── elk.yaml
│   ├── filebeat.yaml
│   ├── grafana.yaml
│   ├── ingress
│   ├── local-path-provisioner
│   ├── mongo-express.yaml
│   ├── mongodb.yaml
│   ├── pgadmin.yaml
│   ├── prometheus.yaml
│   ├── rabbitmq.yaml
│   ├── secrets
│   └── volumes
├── logstash
│   └── input.local.conf
├── mongo-db
├── nginx
│   ├── config
│   └── logs
├── production
│   ├── env.env
│   ├── env.template.env
│   ├── secrets.json
│   └── secrets.template.json
├── prometheus
│   └── prometheus.yml
├── push-images.sh
├── rolling-release.sh
├── uninstall-cert-manager.sh
└── up-pods.sh
```






## **👨‍👨‍👧‍👦 Members**

| 이름       | 개발분야                           | 소개페이지                                         | 
| ---------- | ---------------------------------- |  -------------------------------------------------- |
|김민웅   | Front-end                          |  [개인 리포로 이동](https://github.com/yunyun3599)  |
|김준형   | Front-end                          |                      [개인 리포로 이동](https://github.com/leecr1215)   |
|이지호   | Back-end                           |                   [개인 리포로 이동](https://github.com/shxnyoung)   |
|최우석   | Back-end                           |                   [개인 리포로 이동](https://github.com/hayoung1214) |
|Ryan Lee | Deep learning                      |                                 [개인 리포로 이동](https://github.com/printSANO)   |
