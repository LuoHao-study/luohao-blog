<template>
  <Layout>
    <div style="min-height: 600px;"
         class>
      <div class="el-card is-never-shadow"
           style="min-height: 400px;">
        <div class="el-card__header">
          <div>
            <div class="el-row">
              <div class="el-col el-col-12">
                <span>{{$page.repo.title}}</span>
              </div>
              <div class="el-col el-col-12">
                <div style="text-align: right;">
                  <button type="button"
                          class="el-button el-button--text"
                          style="padding: 3px 0px;">
                    <i class="el-icon-share"></i>
                    <span>分享</span>
                  </button>
                  <button type="button"
                          class="el-button el-button--text"
                          style="padding: 3px 0px;">
                    <a :href="'https://github.com/LuoHao-study' + $page.repo.title">
                      <i class="el-icon-back"></i>
                      <span>前往GitHub</span>
                    </a>
                  </button>
                  <button type="button"
                          class="el-button el-button--text"
                          style="padding: 3px 0px;">
                    <g-link to="/project">
                      <i class="el-icon-more-outline"></i>
                      <span>更多项目</span>
                    </g-link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="el-card__body">
          <div style="font-size: 0.9rem; line-height: 1.5; color: rgb(96, 108, 113);">
            发布 {{$page.repo.created_at}}
            <br />
            更新 {{$page.repo.updated_at}}
          </div>
          <div style="font-size: 1.1rem; line-height: 1.5; color: rgb(48, 49, 51); padding: 20px 0px 0px;">{{$page.repo.subTitle}}</div>
          <div style="font-size: 1.1rem; color: rgb(48, 49, 51); padding: 15px 0px; border-bottom: 1px solid rgb(228, 231, 237);">
            <div class="el-row">
              <div class="el-col el-col-16"
                   style="padding-top: 5px;">
                <i class="el-icon-star-off el-tooltip"
                   aria-describedby="el-tooltip-9850"
                   tabindex="0"
                   style="margin: 0px 5px 0px 0px;"></i>
                {{$page.repo.start}}
                <i class="el-icon-view el-tooltip"
                   aria-describedby="el-tooltip-5731"
                   tabindex="0"
                   style="margin: 0px 5px 0px 15px;"></i>
                {{$page.repo.watch}}
                <i class="el-icon-bell el-tooltip"
                   aria-describedby="el-tooltip-4097"
                   tabindex="0"
                   style="margin: 0px 5px 0px 15px;"></i>
                {{$page.repo.fork}}
              </div>
              <div class="el-col el-col-8"
                   style="text-align: right;">
                <span class="el-tag el-tag--danger el-tag--small"
                      v-for="(tag, index) in $page.repo.tags"
                      :key="index">
                  {{tag.title}}

                </span>
              </div>
            </div>
          </div>
          <div style="padding-top: 20px;"
               class="markdown-body"
               v-html="mdToHtml($page.repo.content)">

          </div>

        </div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query ($id:ID!) {
  repo:strapiRepo(id:$id) {
    id
    title
    content
    created_at
    updated_at
    subTitle
    start
    fork
    watch
    tags{
        id
        title
    }
  }
}
</page-query>
<script>
import MarkdownIt from "markdown-it";
const md = new MarkdownIt();
export default {
  name: "Blog-Detail",
  metaInfo: {
    title: "Blog-Detail",
  },
  methods: {
    mdToHtml (markdown) {
      return md.render(markdown);
    },
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
