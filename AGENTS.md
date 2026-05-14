# Repository Guidelines

## Browser QA

- Default to Hermes `computer_use` against the existing Brave session when browser/UI testing is needed and the tool is available.
- Scope `computer_use` to Brave, capture before clicking, verify after state changes, and do not interact with personal tabs, password prompts, 2FA, payment UI, or permission dialogs without explicit user direction.
- Use Agent Browser, browser review scripts, or Playwright only when `computer_use` is unavailable, an isolated browser profile is required, or the work is a committed automated test.
