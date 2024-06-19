import{_ as e,c as t,o,a4 as a}from"./chunks/framework.IwIcPt9L.js";const d=JSON.parse('{"title":"Github Actions","description":"","frontmatter":{},"headers":[],"relativePath":"docs/deploy/github-actions.md","filePath":"docs/deploy/github-actions.md"}'),i={name:"docs/deploy/github-actions.md"},s=a('<h1 id="github-actions" tabindex="-1">Github Actions <a class="header-anchor" href="#github-actions" aria-label="Permalink to &quot;Github Actions&quot;">​</a></h1><p>We have a few Github Action workflows in the repo, below are a few details on the workflows</p><h2 id="github-pages" tabindex="-1">Github Pages <a class="header-anchor" href="#github-pages" aria-label="Permalink to &quot;Github Pages&quot;">​</a></h2><blockquote><p><a href="https://github.com/NMSUD/Form/blob/main/.github/workflows/commit-message-check.yml" target="_blank" rel="noreferrer">github-pages.yml</a></p></blockquote><p>This workflow builds the web app of the site</p><h2 id="unit-tests" tabindex="-1">Unit tests <a class="header-anchor" href="#unit-tests" aria-label="Permalink to &quot;Unit tests&quot;">​</a></h2><blockquote><p><a href="%5B../../.github/workflows/%5D(https://github.com/NMSUD/Form/blob/main/.github/workflows/)unit-tests.yml">unit-tests.yml</a></p></blockquote><p>This workflow runs the <a href="./../testing/unit-tests.html">unit tests</a>, if any do not pass, the workflow should fail. This only needs to run on Pull requests into <code>main</code></p><h2 id="github-tag-and-release" tabindex="-1">Github Tag and Release <a class="header-anchor" href="#github-tag-and-release" aria-label="Permalink to &quot;Github Tag and Release&quot;">​</a></h2><blockquote><p><a href="%5B../../.github/workflows/%5D(https://github.com/NMSUD/Form/blob/main/.github/workflows/)github-tag-release.yml">github-tag-release</a></p></blockquote><p>This tags the repo, builds the projects, creates a release with the version number in package.json and uploads the build files to the release.</p><h2 id="github-trigger-documentation-build" tabindex="-1">Github Trigger Documentation Build <a class="header-anchor" href="#github-trigger-documentation-build" aria-label="Permalink to &quot;Github Trigger Documentation Build&quot;">​</a></h2><blockquote><p><a href="%5B../../.github/workflows/%5D(https://github.com/NMSUD/Form/blob/main/.github/workflows/)github-trigger-documentation.yml">github-tag-release</a></p></blockquote><p>This triggers a different repository to build and publish our documentation on a different url that is hosted on Github Pages. This includes building this documentation site, the <a href="./../testing/storybook.html">Storybook</a> export and <a href="./../testing/coverage-report.html">unit test coverage report</a></p><h2 id="pull-request-checks" tabindex="-1">Pull Request Checks <a class="header-anchor" href="#pull-request-checks" aria-label="Permalink to &quot;Pull Request Checks&quot;">​</a></h2><blockquote><p><a href="%5B../../.github/workflows/%5D(https://github.com/NMSUD/Form/blob/main/.github/workflows/)pr-checks.yml">pr-checks.yml</a> Work In Progress, this workflow will perform several checks to make sure that the changes in the PR are adequate.</p></blockquote><h2 id="commit-message-check" tabindex="-1">Commit message check <a class="header-anchor" href="#commit-message-check" aria-label="Permalink to &quot;Commit message check&quot;">​</a></h2><blockquote><p><a href="%5B../../.github/workflows/%5D(https://github.com/NMSUD/Form/blob/main/.github/workflows/)commit-message-check.yml">commit-message-check.yml</a> Work In Progress, this workflow will check all the commits that are about to be merged into <code>main</code></p></blockquote>',18),r=[s];function h(l,u,n,c,b,m){return o(),t("div",null,r)}const p=e(i,[["render",h]]);export{d as __pageData,p as default};
