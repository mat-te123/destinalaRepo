namespace App\Models\Traits;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;

trait BelongsToTenant
{
    protected static function bootBelongsToTenant()
    {
        // 1. Query otomatis: Menambahkan WHERE TenantId = ... di setiap SELECT
        static::addGlobalScope('tenant', function (Builder $builder) {
            if (Auth::check()) {
                $builder->where('TenantId', Auth::user()->TenantId);
            }
        });

        // 2. Insert otomatis: Mengisi TenantId saat membuat data baru
        static::creating(function ($model) {
            if (Auth::check()) {
                $model->TenantId = Auth::user()->TenantId;
            }
        });
    }
}