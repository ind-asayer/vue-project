<template>
  <div class="row no-gutters topnav" style="margin:0 15px;">
    <div class="col-sm-12 page-title">
      <h1>{{label}}</h1>
    </div>
  </div>
</template>

<script>
  import '../stories/storiesGlobal.css';
  import '../stories/pageHeader.css';

  export default{
    name: 'pageHeader',

    props: {
      label:{
        type: String,
        required: true,
      }
    }
  };
</script>