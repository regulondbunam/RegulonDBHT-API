# RegulonDB-HT GraphQL API

# Description

API web services to connect RegulonDB High Troughput MongoDB collections. Functional services available:

- Dataset Metada
- TF Binding Peaks
- TF Binding Sites
- Authors Data
- Transcription Unit
- Transcription Start Site
- Transcription Termination Site
- Gene Expression 

Not listed services:

# Motivation

In order to mantain same technologies for software with same proposite there was needed a new web service to connect to a new documental database using GraphQL technology, with this web service API it's possible to get data from RegulonDB HT with an application layer using the technology previously mentioned with Javascript.



# System requirements

Required software

- Node JS ^16.13.0
- NPM ^8.1.4

# Install 

Once the repo is cloned, use this command to install all libraries dependencies of the API

```bash
$ npm install
```

After that, use the following command and edit the ".env-sample" file to add credentials to access the MongoDB collection (keeping the variable name) and the ports for GraphQL servers (by default is used port 4004 for ht services).

```bash
# On Unix
nano .env-sample

# On Windows
notepad .\.env-sample
```

Then use the next command for rename the file to ".env"

```bash
# On Unix
mv .env-sample .env

# On Windows
REN .env-sample .env
```



# Quick start

 Just use this command to start RegulonDB HT Services:

```
$ npm start
```

Now if the GraphQL HT port in .env is not defined, it will take port 4004 (by default) and GraphQL Playgroud for htServices will run at http://localhost:4004/graphql



# Project website 

[Website where the software is described and allows users to obtain it as well as its documentation.]

# Support contact information

[It should be clear where to go for support, for example a contact e-mail address]

# Software quality checklist

[This may describe the state of the code, providing the necessary guidance on which aspects could be improved]

**Accessibility**

- [ ] Unique DOI [identifier](http://....) (Please update identifier and link)
- [ ] Version control system

**Documentation**

- [x] README file

**Learnability**

- [x] Quick start

**Buildability**

- [ ] INSTALL file

**Identity**

- [ ] Website

**Copyright & Licensing**

- [ ] LICENSE file

**Portability**

- [ ] Multiple platforms
- [ ] Browsers

**Supportability**

- [ ] E-mail address
- [ ] Issue tracker
- [ ] Slack
- [ ] Gitter

**Analysability**

- [ ] Source code structured
- [ ] Sensible names
- [ ] Coding standards - [style guides](http://google.github.io/styleguide/)

**Changeability**

- [x] CONTRIBUTING file
- [x] Code of Conduct file
- [ ] Code changes, and their authorship, publicly visible

**Reusability**

- [ ] Source code set up in a modular fashion

**Security & Privacy**

- [ ] Passwords must never be stored in unhashed form


