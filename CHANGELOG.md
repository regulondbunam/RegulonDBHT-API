# RegulonDBHT-API Changelog

All notable changes in this project will be documented in this file

## [1.2.1](https://github.com/regulondbunam/RegulonDBHT-API/releases/tag/1.2.1) - 2022-02-17

### Added
- A query which allows user to use advancedSearch in geneExpression

### Fixed
- Solved a bug related to geneExpression TPM, FPKM and Count fields

## [1.2.0](https://github.com/regulondbunam/RegulonDBHT-API/releases/tag/1.2.0) - 2022-01-31

### Updated
- RegulonDBHT-API now uses Apollo Server Express
- Models and Schemas were updated due modifications on Dataset and geneExpression collections
- Libraries are up to date
- Added function description on controller files

---

## [1.1.1](https://github.com/regulondbunam/RegulonDBHT-API/releases/tag/1.1.1) - 2021-12-17

### Update
- Libraries for RegulonDBHT-API are up to date
- Query examples on GraphQL schemas were fixed

## [1.1.0](https://github.com/regulondbunam/RegulonDBHT-API/releases/tag/1.1.0) - 2021-12-14

### Added

Updated version for RegulonDB High Troughput (HT) Services. The following services are fully functional and finally added for use:
- Transcription Unit
- Transcription Start Site
- Transcription Termination Site
- Gene Expression
- NLP Growth Conditions

### Fixed
- Schemas for Dataset, Peaks, AuthorsData and TFBinding are up to date to collection models
- Bugs related to "null" respones were solved
- Updated Libraries and solved warnings

---


## [1.0.1](https://github.com/regulondbunam/RegulonDBHT-API/releases/tag/1.0.1) - 2021-11-19

### Fixed
- Some properties has a mismatch type definition
- Some propertie name where updated to correct camelCase

## [1.0.0](https://github.com/regulondbunam/RegulonDBHT-API/releases/tag/1.0.0-beta) - 2021-11-16

### Added

First stable version for RegulonDB High Troughput (HT) Services are added. The following services are fully functional:
- Dataset metadata
- Peaks
- TFBinding
- AuthorsData

Following services are added into repository but there aren't in Service List
- TranscriptionUnit
- TranscriptionStartSite
- TranscriptionTerminationSite


The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).