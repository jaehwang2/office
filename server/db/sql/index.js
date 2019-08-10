// import { QueryFile } from 'pg-promise';
import path from 'path';

const QueryFile = require('pg-promise').QueryFile;
module.exports = {
    users: {
        create: sql('users/create.sql'),
        empty: sql('users/empty.sql'),
        init: sql('users/init.sql'),
        drop: sql('users/drop.sql'),
        add: sql('users/add.sql')
    }
};

function sql(file) {

    const fullPath = path.join(__dirname, '..', 'db', 'sql', file); // generating full path;
    const options = {

        // minifying the SQL is always advised;
        // see also option 'compress' in the API;
        minify: true,

        // Showing how to use static pre-formatting parameters -
        // we have variable 'schema' in each SQL (as an example);
        params: {
            schema: 'public' // replace ${schema~} with "public"
        }
    };

    const qf = new QueryFile(fullPath, options);

    if (qf.error) {
        // Something is wrong with our query file :(
        // Testing all files through queries can be cumbersome,
        // so we also report it here, while loading the module:
        console.error(qf.error);
    }

    return qf;

    // See QueryFile API:
    // http://vitaly-t.github.io/pg-promise/QueryFile.html
}

// module.exports = enumSql(__dirname, {recursive: true}, file => {
//     // NOTE: 'file' contains the full path to the SQL file, as we use __dirname for enumeration.
//     return new QueryFile(file, {
//         minify: true,
//         params: {
//             schema: 'public' // replace ${schema~} with "public"
//         }
//     });
// });
