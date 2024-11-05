<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $responseTypes = [
            ['name' => 'application/json'],
            ['name' => 'application/xml'],
            ['name' => 'text/html'],
            ['name' => 'text/plain'],
            ['name' => 'text/csv'],
            ['name' => 'application/pdf'],
            ['name' => 'application/octet-stream'],
            ['name' => 'application/javascript'],
            ['name' => 'application/x-www-form-urlencoded'],
            ['name' => 'multipart/form-data'],
            ['name' => 'application/vnd.api+json'],
            ['name' => 'application/ld+json'],
            ['name' => 'image/jpeg'],
            ['name' => 'image/png'],
            ['name' => 'image/gif'],
            ['name' => 'application/vnd.ms-excel'],
            ['name' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'], // .xlsx
            ['name' => 'application/zip'],
            ['name' => 'application/x-rar-compressed'],
            ['name' => 'text/markdown'],
            // Add more response types as needed
        ];

        DB::table('http_response_types')->insert($responseTypes);

        $statuses = [
            ['code' => '100', 'description' => 'Continue'],
            ['code' => '101', 'description' => 'Switching Protocols'],
            ['code' => '102', 'description' => 'Processing'],
            ['code' => '200', 'description' => 'OK'],
            ['code' => '201', 'description' => 'Created'],
            ['code' => '202', 'description' => 'Accepted'],
            ['code' => '203', 'description' => 'Non-Authoritative Information'],
            ['code' => '204', 'description' => 'No Content'],
            ['code' => '205', 'description' => 'Reset Content'],
            ['code' => '206', 'description' => 'Partial Content'],
            ['code' => '207', 'description' => 'Multi-Status'],
            ['code' => '208', 'description' => 'Already Reported'],
            ['code' => '226', 'description' => 'IM Used'],
            ['code' => '300', 'description' => 'Multiple Choices'],
            ['code' => '301', 'description' => 'Moved Permanently'],
            ['code' => '302', 'description' => 'Found'],
            ['code' => '303', 'description' => 'See Other'],
            ['code' => '304', 'description' => 'Not Modified'],
            ['code' => '305', 'description' => 'Use Proxy'],
            ['code' => '307', 'description' => 'Temporary Redirect'],
            ['code' => '308', 'description' => 'Permanent Redirect'],
            ['code' => '400', 'description' => 'Bad Request'],
            ['code' => '401', 'description' => 'Unauthorized'],
            ['code' => '402', 'description' => 'Payment Required'],
            ['code' => '403', 'description' => 'Forbidden'],
            ['code' => '404', 'description' => 'Not Found'],
            ['code' => '405', 'description' => 'Method Not Allowed'],
            ['code' => '406', 'description' => 'Not Acceptable'],
            ['code' => '407', 'description' => 'Proxy Authentication Required'],
            ['code' => '408', 'description' => 'Request Timeout'],
            ['code' => '409', 'description' => 'Conflict'],
            ['code' => '410', 'description' => 'Gone'],
            ['code' => '411', 'description' => 'Length Required'],
            ['code' => '412', 'description' => 'Precondition Failed'],
            ['code' => '413', 'description' => 'Payload Too Large'],
            ['code' => '414', 'description' => 'URI Too Long'],
            ['code' => '415', 'description' => 'Unsupported Media Type'],
            ['code' => '416', 'description' => 'Range Not Satisfiable'],
            ['code' => '417', 'description' => 'Expectation Failed'],
            ['code' => '418', 'description' => "I'm a teapot"],
            ['code' => '421', 'description' => 'Misdirected Request'],
            ['code' => '422', 'description' => 'Unprocessable Entity'],
            ['code' => '423', 'description' => 'Locked'],
            ['code' => '424', 'description' => 'Failed Dependency'],
            ['code' => '425', 'description' => 'Too Early'],
            ['code' => '426', 'description' => 'Upgrade Required'],
            ['code' => '427', 'description' => 'Unassigned'],
            ['code' => '428', 'description' => 'Precondition Required'],
            ['code' => '429', 'description' => 'Too Many Requests'],
            ['code' => '431', 'description' => 'Request Header Fields Too Large'],
            ['code' => '451', 'description' => 'Unavailable For Legal Reasons'],
            ['code' => '500', 'description' => 'Internal Server Error'],
            ['code' => '501', 'description' => 'Not Implemented'],
            ['code' => '502', 'description' => 'Bad Gateway'],
            ['code' => '503', 'description' => 'Service Unavailable'],
            ['code' => '504', 'description' => 'Gateway Timeout'],
            ['code' => '505', 'description' => 'HTTP Version Not Supported'],
            ['code' => '511', 'description' => 'Network Authentication Required'],
        ];

        DB::table('http_status')->insert($statuses);
    }
}
