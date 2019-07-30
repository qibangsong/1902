import Vue from 'vue'
import Router from 'vue-router'
import search from '@/components/search/search'
import homepagesearch from '@/components/homepagesearch/homepagesearch'
import pageOne from '@/components/pageOne/pageOne'
import pageTwo from '@/components/pageTwo/pageTwo'
import course from '@/components/course/course'
import catalog from '@/components/catalog/catalog'
import evaluate from '@/components/evaluate/evaluate'
import detailone from '@/components/detailone/detailone'
import coursetwo from '@/components/coursetwo/coursetwo'
import catalogtwo from '@/components/catalogtwo/catalogtwo'
import evaluatetwo from '@/components/evaluatetwo/evaluatetwo'
import section from '@/components/section/section'
import login from '@/components/login/login'
import myorder from '@/components/myorder/myorder'

Vue.use(Router)

export default new Router({
	linkActiveClass:"active",
  routes: [
		{
			path: '/',
			name: 'homepagesearch',
			component: homepagesearch,
			meta:{isLogin:false}
		},
		{
      path: '/search',
      name: 'search',
      component: search,
			meta:{isLogin:false}
    },
		{
		  path: '/pageOne',
		  name: 'pageOne',
		  component: pageOne,
			meta:{isLogin:false}
		},
		{
		  path: '/pageTwo',
		  name: 'pageTwo',
		  component: pageTwo,
			meta:{isLogin:false},
			children:[
				{
				  path: 'course',
				  name: 'course',
				  component: course,
				},
				{
				  path: 'catalog',
				  name: 'catalog',
				  component: catalog
				},
				{
				  path: 'evaluate',
				  name: 'evaluate',
				  component: evaluate
				}
			]
		},
		{
				path: '/detailone',
				name: 'detailone',
				component: detailone,
				meta:{isLogin:true},
				children:[
					{
						path: 'coursetwo',
						name: 'coursetwo',
						component: coursetwo,
					},
					{
						path: 'catalogtwo',
						name: 'catalogtwo',
						component: catalogtwo
					},
					{
						path: 'evaluatetwo',
						name: 'evaluatetwo',
						component: evaluatetwo
					}
				]
		},
		{
		  path: '/section',
		  name: 'section',
		  component: section,
			meta:{isLogin:false}
		},
		{
		  path: '/login',
		  name: 'login',
		  component: login,
			meta:{isLogin:false}
		},
		{
		  path: '/myorder',
		  name: 'myorder',
		  component: myorder,
			meta:{isLogin:true}
		},
  ]
})
