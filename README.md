# Code for Good Team-1

Welcome to the Team-1 hackathon project. This document provides essential information on setting up, collaborating, and participating in our project.

## Table of Contents

- [Initial Setup](#initial-setup)
- [Collaboration Tools](#collaboration-tools)
- [Branching Strategy](#branching-strategy)
- [Presentation](#presentation)

## Initial Setup

### 1. Team Evaluation Survey

Before diving into the project, please complete the following survey to help us better evaluate and set team roles:

[**Team Evaluation Survey**](https://forms.gle/PG6eyytp2FXvpo47A)

### 2. Cloning the Repository

To get started with the codebase, clone the repository:

```
git clone git@github.com:cfghk23/Team-1.git
```

### 3. Setting Up the Virtual Machine

- **Unzipping the Project Folder**:
    ```
    unzip Team-1.zip
    ```

- **Setting Permissions**: 
    Navigate to the `Team-1` folder. Set the appropriate permissions for the private key file to connect to the virtual machine:

    ```
    chmod 600 ./Team-1.pem
    ```

- **Connecting to the VM**: 
    In the `Team-1` directory, you can open a terminal by double right-clicking and pressing control+e. Then, connect to the VM:

    ```
    ssh -i ./Team-1.pem force@ec2-52-77-231-25.ap-southeast-1.compute.amazonaws.com
    ```

## Collaboration Tools

After completing the team survey, your emails will be added to our collaboration tools.

### 1. Design

We'll be using Draw.io for our design tasks. You can access our workspace using the link below:

[**Draw.io Workspace**](https://app.diagrams.net/#G1Ga3vatH-h7dSMT2YIHksaGrlNYliGO1S)

### 2. Task Management

For task management, we'll be using Jira. We recommend using the Kanban template as suggested by the organizers:

[**Jira Workspace**](https://cfgnodeon.atlassian.net/jira/software/projects/NOD/boards/1)

## Branching Strategy

Our repository will have various types of branches:

- `main`: For stable, presentation-ready code.
- `develop`: For combined features and integration before moving to `main`.
- `feature-[name of the feature]`: Specific branches for features or tasks.

## Presentation

Our team will be crafting the project's presentation using Canva. Access our workspace to contribute:

[**Canva Presentation Workspace**](https://www.canva.com/design/DAFwYRnT1HM/N2mzsndM-4TFtnRWpvrH5g/edit?utm_content=DAFwYRnT1HM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)
