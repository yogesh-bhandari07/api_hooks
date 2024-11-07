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
            ['name' => 'application/json', "is_important" => 0],
            ['name' => 'application/xml', "is_important" => 0],
            ['name' => 'text/html', "is_important" => 0],
            ['name' => 'text/plain', "is_important" => 0],
            ['name' => 'text/csv', "is_important" => 0],
            ['name' => 'application/pdf', "is_important" => 0],
            ['name' => 'application/octet-stream', "is_important" => 0],
            ['name' => 'application/javascript', "is_important" => 0],
            ['name' => 'application/x-www-form-urlencoded', "is_important" => 0],
            ['name' => 'multipart/form-data', "is_important" => 0],
            ['name' => 'application/vnd.api+json', "is_important" => 0],
            ['name' => 'application/ld+json', "is_important" => 0],
            ['name' => 'image/jpeg', "is_important" => 0],
            ['name' => 'image/png', "is_important" => 0],
            ['name' => 'image/gif', "is_important" => 0],
            ['name' => 'application/vnd.ms-excel', "is_important" => 0],
            ['name' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', "is_important" => 0], // .xlsx
            ['name' => 'application/zip', "is_important" => 0],
            ['name' => 'application/x-rar-compressed', "is_important" => 0],
            ['name' => 'text/markdown', "is_important" => 0],
        ];

        DB::table('http_response_types')->insert($responseTypes);

        $statuses = [
            ['code' => '100', 'description' => 'Continue', "is_important" => 0],
            ['code' => '101', 'description' => 'Switching Protocols', "is_important" => 0],
            ['code' => '102', 'description' => 'Processing', "is_important" => 0],
            ['code' => '200', 'description' => 'OK', "is_important" => 0],
            ['code' => '201', 'description' => 'Created', "is_important" => 0],
            ['code' => '202', 'description' => 'Accepted', "is_important" => 0],
            ['code' => '203', 'description' => 'Non-Authoritative Information', "is_important" => 0],
            ['code' => '204', 'description' => 'No Content', "is_important" => 0],
            ['code' => '205', 'description' => 'Reset Content', "is_important" => 0],
            ['code' => '206', 'description' => 'Partial Content', "is_important" => 0],
            ['code' => '207', 'description' => 'Multi-Status', "is_important" => 0],
            ['code' => '208', 'description' => 'Already Reported', "is_important" => 0],
            ['code' => '226', 'description' => 'IM Used', "is_important" => 0],
            ['code' => '300', 'description' => 'Multiple Choices', "is_important" => 0],
            ['code' => '301', 'description' => 'Moved Permanently', "is_important" => 0],
            ['code' => '302', 'description' => 'Found', "is_important" => 0],
            ['code' => '303', 'description' => 'See Other', "is_important" => 0],
            ['code' => '304', 'description' => 'Not Modified', "is_important" => 0],
            ['code' => '305', 'description' => 'Use Proxy', "is_important" => 0],
            ['code' => '307', 'description' => 'Temporary Redirect', "is_important" => 0],
            ['code' => '308', 'description' => 'Permanent Redirect', "is_important" => 0],
            ['code' => '400', 'description' => 'Bad Request', "is_important" => 0],
            ['code' => '401', 'description' => 'Unauthorized', "is_important" => 0],
            ['code' => '402', 'description' => 'Payment Required', "is_important" => 0],
            ['code' => '403', 'description' => 'Forbidden', "is_important" => 0],
            ['code' => '404', 'description' => 'Not Found', "is_important" => 0],
            ['code' => '405', 'description' => 'Method Not Allowed', "is_important" => 0],
            ['code' => '406', 'description' => 'Not Acceptable', "is_important" => 0],
            ['code' => '407', 'description' => 'Proxy Authentication Required', "is_important" => 0],
            ['code' => '408', 'description' => 'Request Timeout', "is_important" => 0],
            ['code' => '409', 'description' => 'Conflict', "is_important" => 0],
            ['code' => '410', 'description' => 'Gone', "is_important" => 0],
            ['code' => '411', 'description' => 'Length Required', "is_important" => 0],
            ['code' => '412', 'description' => 'Precondition Failed', "is_important" => 0],
            ['code' => '413', 'description' => 'Payload Too Large', "is_important" => 0],
            ['code' => '414', 'description' => 'URI Too Long', "is_important" => 0],
            ['code' => '415', 'description' => 'Unsupported Media Type', "is_important" => 0],
            ['code' => '416', 'description' => 'Range Not Satisfiable', "is_important" => 0],
            ['code' => '417', 'description' => 'Expectation Failed', "is_important" => 0],
            ['code' => '418', 'description' => "I'm a teapot", "is_important" => 0],
            ['code' => '421', 'description' => 'Misdirected Request', "is_important" => 0],
            ['code' => '422', 'description' => 'Unprocessable Entity', "is_important" => 0],
            ['code' => '423', 'description' => 'Locked', "is_important" => 0],
            ['code' => '424', 'description' => 'Failed Dependency', "is_important" => 0],
            ['code' => '425', 'description' => 'Too Early', "is_important" => 0],
            ['code' => '426', 'description' => 'Upgrade Required', "is_important" => 0],
            ['code' => '427', 'description' => 'Unassigned', "is_important" => 0],
            ['code' => '428', 'description' => 'Precondition Required', "is_important" => 0],
            ['code' => '429', 'description' => 'Too Many Requests', "is_important" => 0],
            ['code' => '431', 'description' => 'Request Header Fields Too Large', "is_important" => 0],
            ['code' => '451', 'description' => 'Unavailable For Legal Reasons', "is_important" => 0],
            ['code' => '500', 'description' => 'Internal Server Error', "is_important" => 0],
            ['code' => '501', 'description' => 'Not Implemented', "is_important" => 0],
            ['code' => '502', 'description' => 'Bad Gateway', "is_important" => 0],
            ['code' => '503', 'description' => 'Service Unavailable', "is_important" => 0],
            ['code' => '504', 'description' => 'Gateway Timeout', "is_important" => 0],
            ['code' => '505', 'description' => 'HTTP Version Not Supported', "is_important" => 0],
            ['code' => '511', 'description' => 'Network Authentication Required', "is_important" => 0],
        ];

        DB::table('http_status')->insert($statuses);

        $charsets = [
            ['name' => 'UTF-8', "is_important" => 1],
            ['name' => 'ISO-8859-1', "is_important" => 1],
            ['name' => 'UTF-16', "is_important" => 1],

        ];

        DB::table('charsets')->insert($charsets);
    }
}
