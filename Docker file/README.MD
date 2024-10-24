## What is Dockerfile ?
A Dockerfile is a script containing instructions that Docker reads to build an image. As a DevOps engineer, understanding Dockerfile commands is essential for creating efficient, reusable, and scalable Docker images.

# Here's an overview of the most commonly used Dockerfile commands with explanations:

## 1. FROM
**Purpose:** Specifies the base image to use for the Docker image.
**Usage:** This is typically the first command in a Dockerfile. It tells Docker which image to use as the starting point (e.g., Ubuntu, Alpine, CentOS, etc.).
**Example:**
```
FROM ubuntu:20.04
```
**Explanation: This uses Ubuntu 20.04 as the base for your image.**


