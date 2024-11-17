<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Carbon\Carbon;

class ApiRequest extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'name',
        'secret',
        'header',
        'body',
        'expiry',
        'method',
        'http_status_id',
        'http_response_type_id',
        'charset_id',
        'user_id',
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($apiRequest) {
            if (auth()->check()) {
                $apiRequest->user_id = auth()->id();
            }
        });
    }

    public function httpStatus()
    {
        return $this->belongsTo(HttpStatus::class, 'http_status_id');
    }

    public function httpResponseType()
    {
        return $this->belongsTo(HttpResponseType::class, 'http_response_type_id');
    }

    public function charset()
    {
        return $this->belongsTo(Charsets::class, 'charset_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    public function getCreatedAtAttribute($value)
    {
        // Format the created_at date in Indian format (e.g., DD-MM-YYYY)
        return Carbon::parse($value)->format('d-m-Y H:i:s');
    }
}
