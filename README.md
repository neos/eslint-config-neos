# @neos-project/eslint-config-neos

<p align="center">
  <a href="https://travis-ci.org/neos/eslint-config-neos">
    <img alt="Travis CI Build Status" src="https://img.shields.io/travis/neos/eslint-config-neos/master.svg?style=flat-square&label=Travis+CI">
  </a>
  <a href="https://www.npmjs.com/package/prettier">
    <img alt="npm version" src="https://img.shields.io/npm/v/prettier.svg?style=flat-square">
  </a>
  <a href="https://snyk.io/test/github/neos/eslint-config-neos?targetFile=package.json">
      <img src="https://snyk.io/test/github/neos/eslint-config-neos/badge.svg?targetFile=package.json" alt="Known Vulnerabilities" data-canonical-src="https://snyk.io/test/github/neos/eslint-config-neos?targetFile=package.json" style="max-width:100%;">
  </a>
  <a href="https://david-dm.org/neos/eslint-config-neos">
    <img alt="Dependency Status" src="https://david-dm.org/neos/eslint-config-neos.svg?style=flat-square&label=DependencyStatus">
  </a>
  <a href="http://slack.neos.io">
    <img alt="Chat on slack" src="http://slack.neos.io/badge.svg?style=flat-square">
  </a>
  <a href="https://discuss.neos.io/">
    <img alt="Discuss in our forum" src="https://img.shields.io/badge/forum-Discourse-39c6ff.svg?style=flat-square">
  </a>
  <a href="https://twitter.com/neoscms">
    <img alt="Follow neoscms on Twitter" src="https://img.shields.io/twitter/follow/neoscms.svg?label=follow+neoscms&style=flat-square">
  </a>
</p>

> ESLint shareable config based on XO with a 4-space indent for the neos project.

## Dependencies
* `babel-eslint`
* `eslint`
* `eslint-config-xo-react`
* `eslint-config-xo-space`
* `eslint-plugin-babel`
* `eslint-plugin-jsx-a11y`
* `eslint-plugin-react`

## Installation
```
npm i -D @neos-project/eslint-config-neos
```

## Usage
Add the following line to your `.eslintrc` file.
```json
{
    "extends": "@neos-project/eslint-config-neos"
}
```

## Related
* [eslint-config-xo-space](https://github.com/sindresorhus/eslint-config-xo-space)
* [eslint-config-xo-react](https://github.com/sindresorhus/eslint-config-xo-react)

## Contributing
#### Requirements
* Node in version `^8.11.0`

## License
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
