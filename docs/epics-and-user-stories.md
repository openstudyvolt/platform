# Open Study Volt: Epics & User Stories

## Table of Contents

1. [User Onboarding](#user-onboarding)
2. [Dashboard & Personalization](#dashboard--personalization)
3. [AI Study Assistant](#ai-study-assistant)
4. [Learning Paths](#learning-paths)
5. [Adaptive Quizzes](#adaptive-quizzes)
6. [Virtual Study Rooms](#virtual-study-rooms)
7. [Gamification](#gamification)
8. [Analytics](#analytics)
9. [Expert Q&A](#expert-qa)
10. [Offline Library](#offline-library)
11. [Tool Integrations](#tool-integrations)
12. [Multilingual Support](#multilingual-support)
13. [Admin Panel](#admin-panel)
14. [Account & Appearance Settings](#account--appearance-settings)

---

## 🧩 EPIC: User Onboarding

**Goal:** Make it easy for new learners to join and access the platform. The
prompts below are written for ChatGPT Codex to implement each user story. The
project uses Laravel 12 with Inertia and React 19. Format code with Prettier and
keep tests in Pest.

- **Forgot Password Flow**: users can request a reset link and choose a new password.
  - As a returning learner who forgets their password,
    I want to receive a reset link via email so I can create a new password and regain access.

### Codex Prompt 1: Email Registration

**Context**
You are working inside the Open Study Volt monorepo using Laravel 12, Inertia
and React 19. Implement a standard email/password registration flow.

**Prompt**
"Create a registration form and backend endpoint that allows new users to sign
up with first name, last name, email and password. Validate all required fields
and password confirmation. On success, redirect to the dashboard."

**Guidelines**

- Keep components under `resources/` and format them with Prettier.
- Use Laravel form requests for validation.
- Add a Pest test covering successful and failed registration.

Priority: High
Tags: onboarding, auth, frontend, backend

### Codex Prompt 2: OAuth Sign-Up

**Context**
The application already uses Laravel Socialite. Extend onboarding to support
Google, Facebook, Twitter and LinkedIn logins.

**Prompt**
"Add OAuth sign-up buttons for Google, Facebook, Twitter and LinkedIn. On a
successful OAuth callback, create or link the user account and redirect to the
dashboard."

**Guidelines**

- Follow Socialite documentation for provider setup.
- Store OAuth identifiers on the user model.
- Write a Pest test verifying login via one provider.

Priority: High
Tags: onboarding, auth, oauth

### Codex Prompt 3: Email Confirmation

**Context**
Use Laravel's built-in email verification features to validate new accounts.

**Prompt**
"Send a verification email after sign-up. When the user clicks the provided
link, mark the email as verified and redirect to the dashboard with a success
message."

**Guidelines**

- Utilize Laravel's `MustVerifyEmail` interface on the User model.
- Queue notification emails.
- Add a Pest test ensuring the verification flow works.

Priority: Medium
Tags: onboarding, auth, email

### Codex Prompt 4: Email Login

**Context**
Authenticate existing users using email and password.

**Prompt**
"Create a login form with email and password fields plus a 'remember me'
checkbox. Validate credentials and redirect to the dashboard on success, showing
errors when credentials are invalid."

**Guidelines**

- Use Laravel's built-in authentication system.
- Maintain session via the remember token when requested.
- Provide a Pest test covering success and failure cases.

Priority: High
Tags: onboarding, auth, login

### Codex Prompt 5: Forgot Password

**Context**
Provide users with a secure password reset workflow.

**Prompt**
"Add a 'forgot password' link on the login page. Sending the request should
email a reset link. The reset form must accept the token, allow a new password
and redirect to login after completion."

**Guidelines**

- Use Laravel's password reset notifications.
- Ensure tokens expire as expected.
- Include a Pest test covering the reset process.

Priority: Medium
Tags: onboarding, auth, password

### Codex Prompt 6: Logout

**Context**
Users need a simple way to end their session.

**Prompt**
"Provide a logout route that terminates the user's session, invalidates cookies
and redirects to the home page."

**Guidelines**

- Use Laravel's default auth logout method.
- Ensure CSRF protection on the logout form.
- Add a Pest test verifying the session is cleared.

Priority: High
Tags: onboarding, auth, logout

### Codex Prompt 7: Manage Social Accounts

**Context**
Users may link or unlink additional OAuth providers.

**Prompt**
"From the account settings page, allow users to connect or disconnect Google,
Facebook, Twitter or LinkedIn accounts. Provide feedback messages on success and
ensure at least one login method remains connected."

**Guidelines**

- Display linked providers in settings.
- Prevent disconnection if it would leave no login method.
- Cover linking and unlinking with a Pest test.

Priority: Low
Tags: onboarding, auth, settings

### Codex Prompt 8: Account Deletion

**Context**
Provide a way for users to permanently remove their account data.

**Prompt**
"Add an account deletion option in settings. Require password confirmation and,
after deletion, log the user out and show a confirmation message."

**Guidelines**

- Cascade delete related records as needed.
- Add a confirmation step to prevent accidental deletions.
- Test the flow with Pest.

Priority: Low
Tags: onboarding, auth, account

---

## 🧩 EPIC: Dashboard & Personalization

Brief overview of learning progress, recent activity and recommended paths.

## 🧩 EPIC: AI Study Assistant

AI-powered tool to summarize text, generate notes and suggest resources.

## 🧩 EPIC: Learning Paths

Personalized roadmaps guiding learners through topics step by step.

## 🧩 EPIC: Adaptive Quizzes

Dynamic quizzes that adjust difficulty based on learner performance.

## 🧩 EPIC: Virtual Study Rooms

Real-time collaborative spaces with video, audio and shared whiteboards.

## 🧩 EPIC: Gamification

Badges, experience points and leaderboards to motivate consistent study.

## 🧩 EPIC: Analytics

Insights and statistics about learner engagement and progress.

## 🧩 EPIC: Expert Q&A

Scheduled sessions where learners ask questions to subject-matter experts.

## 🧩 EPIC: Offline Library

Downloadable resources for studying without an internet connection.

## 🧩 EPIC: Tool Integrations

Ability to connect third-party services like Google Drive or calendar apps.

## 🧩 EPIC: Multilingual Support

Interface and content available in multiple languages.

## 🧩 EPIC: Admin Panel

Moderation tools, user management and system configuration for admins.

## 🧩 EPIC: Account & Appearance Settings

Profile updates, password changes, social accounts and theme preferences.
