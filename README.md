# Sanity Clean Content Studio

Congratulations, you have now installed the Sanity Content Studio, an open-source real-time content editing environment connected to the Sanity backend.

## Available Plans

### Free Plan
For individuals experimenting or shipping smaller projects.
- **Cost**: $0 forever
- **Includes**:
  - Up to 20 user seats
  - 2 permission roles
  - 2 datasets (public only)
  - Unlimited content types and locales
  - Customizable content workspaces
  - Hosted, real-time content database
  - Live previews and visual editing tools

### Growth Plan (Recommended)
For teams with scaling projects and increasing collaboration needs.
- **Cost**: $15 per seat/month
- **Includes everything in Free, plus**:
  - Up to 50 user seats
  - 5 permission roles
  - 2 datasets (private or public)
  - Pay-as-you-go for higher usage
  - Comments and Tasks
  - Scheduled publishing
  - AI Assist

### Enterprise Plan
For organizations with complex security, support, and performance needs.
- **Cost**: Custom pricing
- **Includes everything in Growth, plus**:
  - Custom # user seats
  - Custom roles and access control
  - Custom # datasets
  - Single sign-on with SAML
  - Dedicated support and uptime SLA
  - Onboarding program
  - Custom historical retention
  - Custom usage quota

# Blog Content Schema

This project contains the Sanity.io schema definitions for a blog content management system. It includes schemas for posts, authors, and labels.

## Schema Types

### Post Schema
The post schema includes fields for:
- Title
- Slug (URL-friendly title)
- Author reference
- Thumbnail image
- Summary (max 300 characters)
- Main content (rich text)
- Publication date
- Reading time estimate
- View count
- Labels/tags
- Featured post flag

### Author Schema
The author schema includes:
- Name
- Slug
- Profile picture (with hotspot functionality)
- Biography

### Label Schema
The label schema includes:
- Name
- Slug
- Description
- Color (predefined palette):
  - Blue: `#607D8B`
  - Green: `#546E7A`
  - Red: `#455A64`
  - Gray: `#37474F`

## Project Structure
