<template>
  <page-detail :is-edit='false'></page-detail>
</template>

<script>
import PageDetail from './components/PageDetail'

export default {
  name: 'createPage',
  components: { PageDetail }
}
</script>