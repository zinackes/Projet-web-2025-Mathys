<?php

namespace App\Providers;

use App\Models\Retros;
use App\Models\RetrosColumns;
use App\Models\RetrosColumnsCards;
use App\Policies\RetroColCardPolicy;
use App\Policies\RetroColumnPolicy;
use App\Policies\RetroPolicy;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        Gate::policy(Retros::class, RetroPolicy::class);
        Gate::policy(RetrosColumns::class, RetroColumnPolicy::class);
        Gate::policy(RetrosColumnsCards::class, RetroColCardPolicy::class);
    }
}
