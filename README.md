# adonis-crud


# create controller with  resources <index, create, update ,destroy>


# install lucid
  --npm i @adonisjs/lucid
  --node ace configure @adonisjs/lucid
  -- validate  environment  variables <env.ts>
    /**
      * Depending upon the database driver you are using, you must validate
      * the environment variables defined.
      *
      * The following is an example for PostgreSQL.
      */
      export default Env.rules({
        PG_HOST: Env.schema.string({ format: 'host' }),
        PG_PORT: Env.schema.number(),
        PG_USER: Env.schema.string(),
        PG_PASSWORD: Env.schema.string.optional(),
        PG_DB_NAME: Env.schema.string(),
      })

# create model with parameters

# create migration and rollback


# add adonis kvn response 
  node ace invoke adonis-kvn-response


# create the crud application

# create validators for user inputs







