<?php
namespace App\Models;
use App\Models\Traits\BelongsToTenant;
use Illuminate\Database\Eloquent\Model;

class Faq extends Model {
    use BelongsToTenant;
    protected $table = 'Faqs';
    protected $primaryKey = 'Id';
    public $timestamps = false;
    protected $fillable = ['TenantId', 'Question', 'Answer', 'Category'];
}