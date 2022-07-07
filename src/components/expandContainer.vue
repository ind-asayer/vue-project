<template>
	<div>
		<div class="card dr-shadow filter" style="margin:15px 0">
			<div class="headline">
        <div class="row">
          <div class="col-sm-9 text-start">
            Additional Columns
          </div>
          <div class="col-sm-3 text-end">
            <a href="javascript:" id="expanderBtn" v-b-toggle="label" style="color:rgba(255,255,255,1);">
              <i class="fa fa-plus-circle" aria-hidden="true"></i> 
            </a>
          </div>
        </div>
      </div>

      <b-collapse :id="label">
        <div class="row no-gutters" style="padding:20px;">
          <div class="col-sm-12">
            Some Text
          </div>
        </div>
      </b-collapse>
		</div>
	</div>
</template>

<script>
  import '../stories/expandContainer.css';

  export default{
    name: 'expandContainer',

    props: {
      label:{
        type: String,
        required: true,
      }
    }
  };
</script>