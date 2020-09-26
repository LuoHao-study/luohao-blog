<template>
  <Layout>
    <div class="el-card is-never-shadow"
         style="min-height: 400px; margin-bottom: 20px; padding: 0px 0px 20px;">
      <div class="el-card__body">
        <div class="el-tabs el-tabs--card el-tabs--top">
          <div class="el-tabs__header is-top">
            <div class="el-tabs__nav-wrap is-top">
              <div class="el-tabs__nav-scroll">
                <div role="tablist"
                     class="el-tabs__nav"
                     style="transform: translateX(0px);">
                  <div id="tab-followers"
                       aria-controls="pane-followers"
                       role="tab"
                       tabindex="-1"
                       class="el-tabs__item is-top"
                       :class="isFollowing ? 'is-active' : ''"
                       @click="changeStatus(true)">粉丝 {{$page.followings.totalCount}}</div>
                  <div id="tab-following"
                       aria-controls="pane-following"
                       role="tab"
                       tabindex="0"
                       class="el-tabs__item is-top"
                       :class="!isFollowing ? 'is-active' : ''"
                       @click="changeStatus(false)"
                       aria-selected="true">关注 {{$page.followers.totalCount}}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="el-tabs__content">
            <div role="tabpanel"
                 id="pane-followers"
                 aria-labelledby="tab-followers"
                 class="el-tab-pane"
                 style="padding: 5px;"
                 aria-hidden="true"
                 v-if="!isFollowing">
              <div class>
                <div>
                  <div class="el-row"
                       style="min-height: 200px;">
                    <div class="el-col el-col-8"
                         style="padding: 10px;"
                         v-for="(follower, index) in $page.followers.edges"
                         :key="index">
                      <div class="el-card is-hover-shadow"
                           style="font-size: 13px; color: rgb(96, 98, 102); line-height: 20px;">

                        <div class="el-card__body">
                          <i class="el-icon-star-off"></i>
                          <a style="text-decoration: none; cursor: pointer;">{{follower.node.username}}</a>
                          <br />
                          <i class="el-icon-message"></i>
                          <a :href="follower.node.url"
                             target="_blank"
                             style="text-decoration: none; cursor: pointer;">TA的主页</a>
                          <br />
                          <img :src="'http://www.luohaocode.com' + follower.node.img.url"
                               style="width: 100%; border-radius: 5px; margin-top: 5px;" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div role="tabpanel"
                 id="pane-following"
                 aria-labelledby="tab-following"
                 class="el-tab-pane"
                 style="padding: 5px;"
                 v-else>
              <div class>
                <div>
                  <div class="el-row"
                       style="min-height: 200px;">
                    <div class="el-col el-col-8"
                         style="padding: 10px;"
                         v-for="(following, index) in $page.followings.edges"
                         :key="index">
                      <div class="el-card is-hover-shadow"
                           style="font-size: 13px; color: rgb(96, 98, 102); line-height: 20px;">

                        <div class="el-card__body">
                          <i class="el-icon-star-off"></i>
                          <a style="text-decoration: none; cursor: pointer;">{{following.node.username}}</a>
                          <br />
                          <i class="el-icon-message"></i>
                          <a :href="following.node.url"
                             target="_blank"
                             style="text-decoration: none; cursor: pointer;">TA的主页</a>
                          <br />
                          <img :src="'http://www.luohaocode.com' + following.node.img.url"
                               style="width: 100%; border-radius: 5px; margin-top: 5px;" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Pager :info="$page.followers.pageInfo"
                 v-if="!isFollowing" />
          <Pager :info="$page.followings.pageInfo"
                 v-else />
        </div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query($page: Int) {
  followers:allStrapiFollower(perPage: 9, page: $page) @paginate { 
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        username
        url
        img {
          url
        }
      }
    }
  }
  followings:allStrapiFollowing(perPage: 9, page: $page) @paginate{ 
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        username
        url
        img {
          url
        }
      }
    }
  }
}
</page-query>
<script>
import { Pager } from "gridsome";
import Followers from "../components/Followers";
import Followings from "../components/Followings";
export default {
  name: "Social",
  data () {
    return {
      isFollowing: true,
    };
  },
  metaInfo: {
    title: "Social",
  },
  components: {
    Followers,
    Followings,
    Pager,
  },
  methods: {
    changeStatus (boo) {
      if (this.$route.path !== '/social') {
        this.$router.push('/social')
      }
      this.isFollowing = boo;
    },
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
