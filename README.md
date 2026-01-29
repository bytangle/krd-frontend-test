# Angular Livestream Performance Optimization Test

## Introduction

This repository contains a small Angular application that simulates a livestream interface with a real-time viewer count and a continuously updating chat feed.

The application is intentionally implemented in a suboptimal way. While it functions correctly, it contains multiple performance, rendering, and memory-management issues that commonly appear in Angular applications dealing with real-time data streams.

This test is designed to evaluate your ability to analyze existing Angular code, identify inefficiencies, and refactor the application to be more performant and maintainable.

---

## Scope of the Test

The focus of this test is **frontend performance and user experience**, not visual design or feature development.

You are expected to work within the existing codebase and improve it, rather than rewrite the application entirely.

---

## Application Behavior

When running the application, you should observe the following:

- A viewer count that updates once per second
- A chat feed that receives new messages several times per second
- Increasing CPU usage over time
- Noticeable UI slowdown as messages accumulate

All of these behaviors are intentional and are part of the assessment.

---

## Objectives

Your primary goal is to improve the performance and stability of the application while keeping the visible behavior the same.

Specifically, you should aim to:

- Reduce unnecessary Angular change detection cycles
- Improve rendering efficiency for frequently updated UI elements
- Prevent memory leaks and unmanaged subscriptions
- Handle high-frequency data updates in a scalable way
- Improve overall responsiveness of the UI

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (version 18 or higher)
- Angular CLI

Install Angular CLI globally if not already installed:

```bash
npm install -g @angular/cli
```

## Install Dependencies

### From the project root, install dependencies:

```bash
npm install
```

## Run the Application

### Start the development server:

```bash
ng serve
```

### Then open your browser and navigate to:

```bash
http://localhost:4200