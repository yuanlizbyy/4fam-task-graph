# 4fam task dependency graph

Public, editable view of the 4fam task list. The original page is in the private `4BNR/4fam_master_repo` repository; this repository contains only the graph page and its task data.

## Open and edit

Open the GitHub Pages URL. Everyone sees the same task data from `task-data.json`. Changes to cards are saved as a browser draft immediately; select **Save for team** to commit them to this repository. A save updates the shared data for everyone. **Reload team version** discards a local draft after confirmation.

Each editor needs write access to this repository and a [fine-grained GitHub personal access token](https://github.com/settings/personal-access-tokens/new) limited to this repository, with **Contents: Read and write**. Paste it into **Editor access** on the page. The token stays in the open tab only and is sent only to `api.github.com` when saving. Never paste it into a task field or share it with another editor.

The page checks the GitHub file revision before saving. If another editor has saved first, it keeps your draft and asks you to export it before reloading. Import/Export JSON also works for backups or moving drafts between browsers. **Share team link** copies the live page URL; viewers see the latest saved version. Older `#state=` snapshot links still open as local drafts.

## Hosting

GitHub Pages publishes the root of `main` at `https://yuanlizbyy.github.io/4fam-task-graph/`. The site and `task-data.json` are public. All files are static. The GitHub Contents API provides shared storage and write authorization; no separate server or database is needed.

The page is based on `tasks/task-dependency-graph.html` from `4BNR/4fam_master_repo`. Tailwind's browser bundle is included locally to avoid loading executable JavaScript from a third-party CDN while an editor token is present. Its license is in `TAILWIND-LICENSE.txt`.
