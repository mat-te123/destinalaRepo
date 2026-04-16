<?php
namespace App\Models;

use App\Models\Traits\BelongsToTenant;
use Illuminate\Database\Eloquent\Model;

class CompanyProfile extends Model
{
    use BelongsToTenant;
    protected $table = 'CompanyProfiles';
    protected $primaryKey = 'Id';
    public $timestamps = false;
    protected $fillable = [
        'TenantId', 'AboutUs', 'Vision', 'Mission', 'Address', 'Phone', 'Email',
        'ServiceLabelAlias', 'PackageLabelAlias' // Kunci untuk nama menu yang berbeda
    ];
}